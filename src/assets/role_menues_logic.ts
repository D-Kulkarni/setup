//Super Admin Menu
export const menus = {
    role:['dashboard', 'employees', 'jobs', 'clients','teams','qualityTeamplates'],
    role1:['dashboard']
  }
  export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        // items: ['dashboard', 'employees', 'jobs', 'clients','teams','qualityTeamplates'],
        items:menus['role1']
    }
  
  ];