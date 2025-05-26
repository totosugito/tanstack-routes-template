import LoginForm from "./LoginForm";
import React from "react";
import {LoginProps} from "@/types/auth";

const LayoutLogin: React.FC<LoginProps> = ({onFormSubmit}) => {
  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <div className={"absolute w-screen h-screen opacity-30 shadow-lg backdrop-blur-sm backdrop-filter transition-all"}/>
      <div className={"relative"}>
        <div
          className="mx-auto w-full max-w-sm space-y-6 rounded-xl border border-background/30 bg-background/70 p-8 shadow-lg backdrop-blur-sm backdrop-filter transition-all sm:w-[400px]">

          <div className="flex flex-col items-center gap-2">
            <div className={"text-xl font-bold"}>LOGIN</div>
            <div>Please login with your account</div>
          </div>

          <LoginForm onFormSubmit={onFormSubmit}/>
        </div>
      </div>
    </div>
  )
}
export default LayoutLogin;