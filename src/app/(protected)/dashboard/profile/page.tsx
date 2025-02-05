"use client";

import { useAuthenticatedUser } from "@/features/auth/api/useAuthenticatedUser";

const ProfileDetailsPage = () => {
  const { data: { data: authUser } = {} } = useAuthenticatedUser();

  return <pre>{JSON.stringify(authUser, null, 3)}</pre>;
};

export default ProfileDetailsPage;
