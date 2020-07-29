console.log(process.env)
const webUrl = process.env.BASE_API
const URLS= {
        basicInfo: webUrl + '/membership/basic',
        logIn:webUrl +'/login',
      
}
export default URLS