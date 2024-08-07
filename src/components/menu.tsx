import {CiMenuBurger} from "react-icons/ci";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import Link from "next/link";

type MenuNavigator = {
  title: string;
  link: string;
};

const navigator: MenuNavigator[] = [
  {
    title: "Introduction",
    link: "#introduction",
  },
  {
    title: "About me",
    link: "#about",
  },
  {
    title: "Skill",
    link: "#skill",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Work Experience",
    link: "#work",
  },
  {
    title: "Project",
    link: "#project",
  },
];

const Menu = () => {
  return (
    <>
      <div className="fixed top-4 right-4 z-10 ">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className="w-14 h-14">
              <CiMenuBurger size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            {navigator.map((location) => {
              return (
                <Link
                  href={location.link}
                  key={`${location.link} ${location.title}`}>
                  <Button
                    variant={"link"}
                    size={"lg"}
                    className="w-full text-xl justify-start">
                    {location.title}
                  </Button>
                </Link>
              );
            })}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Menu;
