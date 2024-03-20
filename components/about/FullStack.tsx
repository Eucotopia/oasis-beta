import {Icon, IconProps} from "@iconify/react";
import React from "react";
import Rocket from "@/components/about/Rocket"
type SocialIconProps = Omit<IconProps, "icon">;
export const GROUPS = [
    {
        name: 'Languages',
        items: [
            {
                name: 'Java',
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
            {
                name: 'C++',
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
            {
                name: 'Html',
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
            {
                name: 'CSS',
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
            {
                name: 'TypeScript',
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
        ],
    },
    {
        name: 'Tools',
        items: [
            {
                name: "VS Code",
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
            {
                name: "IntelliJ",
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
            {
                name: "Android Studio",
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            }
        ]
    },
    {
        name: 'Frontend',
        items: [
            {
                name: "React",
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
            {
                name: "Next.js",
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
            {
                name: "Flutter",
                icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
            },
        ]
    }
]

const FullStack = () => {
    return (
        <>
            {/*<div className={"flex flex-col items-center justify-center"}>*/}
            {/*    <Spacer y={6}/>*/}
            {/*    <div className={"flex flex-row grid-cols-2 gap-8"}>*/}
            {/*        <div className={"flex flex-col"}>*/}
            {/*            <h1 className={title({color: 'yellow'})}>Full Stack Developer</h1>*/}
            {/*        </div>*/}
            {/*        <div*/}
            {/*            style={{backgroundImage: "url('/image/hero-image.png')", backgroundSize: 'cover', backgroundPosition: 'right', width: '300px', height: '300px'}*/}
            {/*            }>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <Spacer y={6}/>*/}
            {/*    <h1 className={title({color: 'violet'})}>Skills</h1>*/}
            {/*    <div>*/}
            {/*        {*/}
            {/*            GROUPS.map((group, index) => {*/}
            {/*                return (*/}
            {/*                    <div key={index} className={"flex flex-col"}>*/}
            {/*                        <h1 className={title({color: 'yellow'})}>{group.name}</h1>*/}
            {/*                        <div key={index}*/}
            {/*                             className={"flex flex-row gap-8"}>*/}
            {/*                            {*/}
            {/*                                group.items.map((item, index) => {*/}
            {/*                                    return (*/}
            {/*                                        <>*/}
            {/*                                            <Tooltip content={item.name}*/}
            {/*                                                     placement={"top"}>*/}
            {/*                                                <div>*/}
            {/*                                                    <item.icon aria-hidden="true" className="w-20"*/}
            {/*                                                               width={50}/>*/}
            {/*                                                </div>*/}
            {/*                                            </Tooltip>*/}
            {/*                                        </>*/}
            {/*                                    )*/}
            {/*                                })*/}
            {/*                            }*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                )*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
export default FullStack