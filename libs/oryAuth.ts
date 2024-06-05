import type { FrontendApi, UiNodeInputAttributes, UpdateLoginFlowBody } from '@ory/client'

abstract class AuthService {
  protected abstract frontendApi: FrontendApi

  abstract login(email: string, password: string): Promise<any>
  abstract logout(): Promise<any>
  abstract getSession(): Promise<any>
}

class OryAuth extends AuthService {
  protected frontendApi: FrontendApi

  constructor(frontendApi: FrontendApi) {
    super()
    this.frontendApi = frontendApi
  }

  async login(email: string, password: string): Promise<any> {
    const { data: flow } = await this.frontendApi.createBrowserLoginFlow()
    const updateLoginFlowBody = {
      ...flow.ui.nodes
        .reduce((acc, node) => {
          const attribute = node.attributes as UiNodeInputAttributes
          acc[attribute.name] = attribute.value
          return acc
        }, {} as { [key: string]: string }),
      identifier: email,
      password,
      method: 'password',
    }
    return this.frontendApi.updateLoginFlow({
      flow: flow.id,
      updateLoginFlowBody: updateLoginFlowBody as UpdateLoginFlowBody,
    })
  }

  async logout(): Promise<any> {
    const { data: flow } = await this.frontendApi.createBrowserLogoutFlow()
    return this.frontendApi.updateLogoutFlow({ token: flow.logout_token })
  }

  async getSession(): Promise<any> {
    return this.frontendApi.toSession()
  }
}

export default OryAuth
