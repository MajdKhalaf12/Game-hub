import axios from "axios";

export default axios.create({
   baseURL:'https://api.rawg.io/api',
   params:{
      key:"90646e493393455ca46ec2d4035b32d1"
   }
})