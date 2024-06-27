"use client";

import { Button } from "@/components/ui/button";
import { useConvex, useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, and Plans. All in One Place. Welcome to{" "}
        <span className="underline"> NoteIt.</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-wxl font-medium">
        NoteIt is the connected workspace where better and faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter NoteIt <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>Get NoteIt free</Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
