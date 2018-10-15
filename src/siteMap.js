/*
 * Commons
 * https://www.xxx.org/
 *
 * Commons site map component.
 */

// TODO move to yml and put in the content directory

const siteMap =
    [
        {
            name: "Home",
            key: "home",
            children: [
                {
                    name: "Home Test",
                    key: "home-test",
                    children: [
                        {
                            name: "Page 1",
                            key: "/home/home-test/page1"
                        },
                        {
                            name: "Page 2",
                            key: "/home/home-test/page2"
                        }
                    ]
                },
                {
                    name: "Home Test 2",
                    key: "home-test2",
                    children: [
                        {
                            name: "Page 1",
                            key: "/home/home-test2/page1"
                        }
                    ]
                }
            ]
        },
        {
            name: "Privacy",
            key: "privacy",
            children: [
                {
                    name: "",
                    key: "privacy",
                    children: [
                        {
                            name: "",
                            key: ""
                        }
                    ]
                }
            ]
        },
        {
            name: "About",
            key: "about",
            children: [
                {
                    name: "",
                    key: "about",
                    children: [
                        {
                            name: "",
                            key: ""
                        }
                    ]
                }
            ]
        },
        {
            name: "Help",
            key: "help",
            children: [
                {
                    name: "",
                    key: "help",
                    children: [
                        {
                            name: "",
                            key: ""
                        }
                    ]
                }
            ]
        },
        {
            name: "Reigster",
            key: "register",
            children: [
                {
                    name: "",
                    key: "register",
                    children: [
                        {
                            name: "",
                            key: ""
                        }
                    ]
                }
            ]
        }
    ]

export function getSection (path) {

    const key = path.split('/')[1]
    const section = siteMap.find((s) => {
        return s.key === key
    })

    if (!section) {
        throw new Error('section with key: \'' + key + '\' is not found!')
    }
    return section
}

export function getTabs (path) {

    const section = getSection(path)

    if (!section.children) {
        throw new Error('No children for section: \'' + section.key + '\'')
    }

    section.children.forEach((tab) => {
        if (!tab.children || tab.children.length == 0) {
            throw new Error('Tab  \'' + tab.name + '\' has no children and therefore no landing page.')
        }
    })

    return section.children
}

export function getTab (path) {
    const tabs = getTabs(path)
    const key = path.split('/')[2]
    const tab = tabs.find((s) => {
        return s.key === key
    })

    if (!tab) {
        throw new Error('No tab for key: \'' + key + '\'')
    }
    return tab
}

export function getNav (path) {
    const tab = getTab(path)
    if (!tab) {
        return []
    }
    return tab.children
}

