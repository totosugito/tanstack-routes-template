import * as React from "react";
import {AuthContextTag} from "@/lib/auth-context";

export function useAuth() {
  const context = React.useContext(AuthContextTag)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}