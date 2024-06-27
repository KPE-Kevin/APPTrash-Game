

class Requests {
    constructor() {
        this.serv = `http://${process.env.EXPO_PUBLIC_SERVER}:${process.env.EXPO_PUBLIC_PORT}/`
    }

    async HttpRequest(_url, _option = { method: 'GET' }) {
        let result = await fetch(_url, _option)
            .then(response => response.json())
            .then(data => data)
            .catch((e) => {
                console.log(e)
            });
        return result;
    }

    async HttpReqServGET(route = '', info) {
        let url = this.serv;
        let data = encodeURIComponent(JSON.stringify(info))
        if (route !== '') {
            url += 'api/' + route + `?data=${data}`;
        }
        let ask = await this.HttpRequest(url);
        return ask;
    }

    async HttpReqServPOST(route, info) {
        const url = this.serv + 'api/' + route;
        const optfecth = this.ModifyConfigFetch('POST', info);
        let ask = await this.HttpRequest(url, optfecth);
        return ask;
    }

    async HttpReqServPUT(route, info) {
        const url = this.serv + 'api/' + route;
        const optfecth = this.ModifyConfigFetch('PUT', info);
        let ask = await this.HttpRequest(url, optfecth);
        return ask;
    }

    async HttpReqServDELETE(route, info) {
        const url = this.serv + 'api/' + route + `?data=${info}`;
        const optfecth = this.ModifyConfigFetch('DELETE');
        let ask = await this.HttpRequest(url, optfecth);
        return ask;
    }

    ModifyConfigFetch(type = 'GET', obj = null, headers = null) {
        const configFetch = {}
        configFetch.method = type;
        if (obj !== null) configFetch.body = JSON.stringify(obj);
        if (headers !== null) configFetch.headers = headers;
        return configFetch;
    }
}

export default Requests