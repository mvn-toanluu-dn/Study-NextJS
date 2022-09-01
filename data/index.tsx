type Menu = {
    title: string;
    values?: string[];
    addNew?: boolean;
    showMenu: boolean;
    className:string;
    className2:string;
  };

export const menu: Menu[] = [
    {
      title: "Home",
      values: [],
      addNew: false,
      showMenu: false,
      className:"menu-item-sub",
      className2:"menu-small"

    },
    {
      title: "Listing",
      values: ["Details Listing"],
      addNew: true,
      showMenu: false,
      className:"menu-item-sub",
      className2:"menu-small"


    },
    {
      title: "Services",
      values: [],
      addNew: false,
      showMenu: false,
      className:"menu-item-sub",
      className2:"menu-small"


    },
    {
      title: "Blog",
      values: ["Single Post"],
      addNew: true,
      showMenu: false,
      className:"menu-item-sub",
      className2:"menu-small"

    },
    {
      title: "Page",
      values: ["404", "Gallery", "Help Center", "Team"],
      addNew: true,
      showMenu: false,
      className:"menu-item-sub page",
      className2:"menu-small-page"
      
    },
    {
      title: "About",
      values: [],
      addNew: false,
      showMenu: false,
      className:"menu-item-sub",
      className2:"menu-small"


    },
    {
      title: "Contact Us",
      values: [],
      addNew: false,
      showMenu: false,
      className:"menu-item-sub",
      className2:"menu-small"


    },
  ];