import { gql } from "apollo-angular";
const Get_pro=gql`
query {
    products(Function: "Filters"){
        id
        name_ar
        name_en
        admin_comment
        attributes{
            id
        }
        category{
            name_ar
            id
        }
    }
}
`
export {Get_pro};