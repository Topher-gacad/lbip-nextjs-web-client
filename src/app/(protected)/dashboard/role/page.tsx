import CreateRoleForm from "@/features/auth/components/roles/features/create/components/CreateRoleForm";
import RolesTable from "@/features/auth/components/roles/features/list/components/RolesTable";

const rolePage = () => {
  return (
    <div>
      <CreateRoleForm />
      <RolesTable />
    </div>
  );
};
export default rolePage;
