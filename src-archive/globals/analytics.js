import {_isProd, _GtagID } from '@globals/vars'

export default (page_title) => {
    return {
        config: {
            id: _GtagID,
            params: {
                send_page_view: true,
                page_title: page_title
            }
        },
        enabled: _isProd
    }
}