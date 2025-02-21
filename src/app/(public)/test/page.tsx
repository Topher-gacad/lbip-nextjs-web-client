import UserDetails from "@/components/ui/user-details/UserDetails";

const TestPage = () => {
  return (
    <UserDetails
      user={{
        email: "example.com",
        profile: {
          first_name: "john doe",
          last_name: "doe",
          contact_num: "09234234",
        },
      }}
    />
  );
};
export default TestPage;
