import { Fragment } from "react";
import { Link } from "lib/transition";
import { MaterialSymbolsHomeOutlineRounded } from "../ui/icons/icons";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
export default function PageBreadcrumb({ paths }) {
    return (<div className="w-fit max-w-[calc(100vw-2rem)] pb-5 sm:max-w-fit">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">
                <MaterialSymbolsHomeOutlineRounded className="size-6"/>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {paths.length > 2 ? (<>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/docs/${paths[0]}`}>
                    {toTitleCase(paths[0])}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis className="h-1"/>
              </BreadcrumbItem>

              {paths.slice(-1).map((path, i) => {
                const index = paths.length - 1 + i;
                const href = `/docs/${paths.slice(0, index + 1).join("/")}`;
                return (<Fragment key={path}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {index < paths.length - 1 ? (<BreadcrumbLink asChild>
                          <Link href={href}>{toTitleCase(path)}</Link>
                        </BreadcrumbLink>) : (<BreadcrumbPage className="b">
                          {toTitleCase(path)}
                        </BreadcrumbPage>)}
                    </BreadcrumbItem>
                  </Fragment>);
            })}
            </>) : (paths.map((path, index) => {
            const href = `/docs/${paths.slice(0, index + 1).join("/")}`;
            return (<Fragment key={path}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index < paths.length - 1 ? (<BreadcrumbLink asChild>
                        <Link href={href}>{toTitleCase(path)}</Link>
                      </BreadcrumbLink>) : (<BreadcrumbPage className="b">
                        {toTitleCase(path)}
                      </BreadcrumbPage>)}
                  </BreadcrumbItem>
                </Fragment>);
        }))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>);
}
function toTitleCase(input) {
    const words = input.split("-");
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
}
