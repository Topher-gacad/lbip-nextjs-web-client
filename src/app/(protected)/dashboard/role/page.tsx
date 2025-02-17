import CreateRoleForm from "@/features/role/features/create/components/CreateRoleForm";
import RolesTable from "@/features/role/features/list/components/RolesTable";

const rolePage = () => {
  return (
    <div>
      <CreateRoleForm />
      <RolesTable />
    </div>
  );
};
export default rolePage;
