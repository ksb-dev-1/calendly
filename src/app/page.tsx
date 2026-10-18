// import { Suspense } from "react";
// // import { CustomLink } from "@/components/custom-link";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { getServerSession } from "@/lib/get-server-session";
// import { ROUTES } from "@/lib/navigation-paths";
// async function HomeSessionLink() {
//   const session = await getServerSession();
//   if (!session?.user) {
//     return null;
//   }
//   return (
//     <Button asChild>
//       <Link href={ROUTES.DASHBOARD} className="mt-4">
//         Go to Dashboard
//       </Link>
//     </Button>
//   );
// }
// export default function HomePage() {
//   return (
//     <div className="min-h-screen max-w-5xl w-full mx-auto pt-16 flex flex-col items-center">
//       <Suspense fallback={null}>
//         <HomeSessionLink />
//       </Suspense>
//     </div>
//   );
// }
import { CustomLink } from "@/components/custom-link";
import { Button } from "@/components/ui/button";
import { getServerSession } from "@/lib/get-server-session";
import { ROUTES } from "@/lib/navigation-paths";

export default async function HomePage() {
  const session = await getServerSession();

  return (
    <div className="min-h-screen max-w-5xl w-full mx-auto pt-16 flex flex-col items-center">
      <p className="text-3xl font-bold">Better Auth Tutorial</p>
      {session?.user && (
        <Button asChild>
          <CustomLink href={ROUTES.DASHBOARD} className="mt-4">
            Go to Dashboard
          </CustomLink>
        </Button>
      )}
    </div>
  );
}
