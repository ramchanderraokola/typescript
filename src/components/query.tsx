import {gql} from '@apollo/client'

const USER_DATA=gql `
  {
    Ram_Internship {
      firstname
      lastname
      email
      password
      phoneNo
    }
  }`;

  const SIGN_UP_MUTATION= gql `
   mutation signupMutation(
       $firstname:String
       $lastname:String
       $email:String
       $password:String
       $phoneNo:numeric
   ) {
       insert_Ram_Internship(
           objects: {
               firstname:$firstname
               lastname:$lastname
               email:$email
               password:$password
               phoneNo:$phoneNo
                  }
          ){
           returning {
               id
           }
       }
   }`;

   export {USER_DATA, SIGN_UP_MUTATION};