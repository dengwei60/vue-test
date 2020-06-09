(function(axios){
    //创建一个数据请求实例(对axios进行封装)
    let Axios = axios.create({
        baseURL: "https://apimusic.linweiqin.com/",
        timeout: 15000,
        // headers: headers
    })
    // console.log(Axios)
    //配置数据请求拦截(在请求发送前要做什么)
    Axios.interceptors.request.use(config => {
    return config;
    },error => {
    return Promise.reject(error);
    });
    //数据访问后的拦截(在数据访问到后要做什么)
    Axios.interceptors.response.use(response => {
    // console.log(response)
    return response.data;
    },error => {
    return Promise.reject(error);
    });
    //将Axios暴露到window
    window.Axios = Axios
})(axios)