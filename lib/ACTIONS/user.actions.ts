'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email,password}:signInProps)=>{
    try {
        // create user
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email,password)

        return parseStringify(response)
    } catch (error:any) {
        console.error("Error during sign-in:", error.message || error);
        throw new Error(error.message || "An error occurred during sign-in"); // Re-throw the error for handling upstream
        
    }
}
export const signUp = async (userData:SignUpParams)=>{
    const {firstName,lastName,email,password} = userData
    try {
        // create user account
        const { account } = await createAdminClient();
    
        const newUserAccount = await account.create(ID.unique(), 
        email,
        password,
        `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        return parseStringify(newUserAccount)

    } catch (error) {
        console.log(error);
        
    }
}

export const logoutAccount = async ()=>{
    try {
        const {account} = await createSessionClient()
        cookies().delete('appwrite-session')

        await account.deleteSession('current')
    } catch (error) {
        
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
   try {
      const { account } = await createSessionClient();
      const user = await account.get();
      return user; // Don't need to call account.get() twice
   } catch (error) {
      console.error("Error getting logged-in user:", error);
      return null;
   }
}



  