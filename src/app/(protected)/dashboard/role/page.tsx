import CreateRoleForm from "@/features/roles/features/create/components/CreateRoleForm";
import RolesTable from "@/features/roles/features/list/components/RolesTable";

const rolePage = () => {
  return (
    <div>
      <CreateRoleForm />
      <RolesTable />
    </div>
  );
};
export default rolePage;
