"use client";

import { userSchemaKeys, profileSchemaKeys, TUserProfileSchema, roleSchemaKeys } from "@/features/user/schema/user";
import { Stack } from "@mui/material";

//type for the user details
type PUserDetails = {
  user: TUserProfileSchema; //reference to user-profile schema
};

const UserDetails = ({ user }: PUserDetails) => {

  return (
    <Stack>
      {userSchemaKeys.map((key)=>{
        return <p key={key}>{user[key]}</p> 
      })}

     {profileSchemaKeys.map((key)=>{
        return <p key={key}>{user.profile[key]}</p> 
      })}

     {user.roles.map((role)=>{
      return <Stack sx={{ border: "1px solid red"}} key={role.id}>{roleSchemaKeys.map((key)=>{
        return <p key={key}>{`${key}: ${role[key]}`}</p> 
      })}</Stack>
     })}
     
    </Stack>
  );
};

export default UserDetails;
