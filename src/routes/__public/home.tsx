import {createFileRoute, Link} from '@tanstack/react-router'
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute('/__public/home')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Tanstack Routes Demo Template
          </h1>
          <p className="mt-6 text-[17px] md:text-lg">
            Explore the power of TanStack Router with this demo template.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Link to={"/login"}>
            <Button size="lg" className="rounded-full text-base">
              Go To Login <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    );
}
