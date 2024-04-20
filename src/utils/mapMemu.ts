import type { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
export const menuMapToRoutes = (userMenus: any): RouteRecordRaw[] => {
  //获取全部的路由对象
  const allRoutes: RouteRecordRaw[] = []
  const requireCtx = require.context('@/router/main', true, /\.ts/)
  requireCtx.keys().forEach((item) => {
    const moduleObj = require('@/router/main' + item.split('.')[1])
    allRoutes.push(moduleObj.default)
  })

  //根据userMenus，从allRoutes中映射出相应的路由
  const routes: RouteRecordRaw[] = []
  const recursionMap = (userMenus: any) => {
    for (const menu of userMenus) {
      if (menu.type === 1) {
        recursionMap(menu.children ?? [])
      } else {
        // allRoutes.forEach((route) => {
        //   if (route.path === menu.url) {
        //     routes.push(route)
        //   }
        // })
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routes.push(route)
        }

        if (!firstMenu) {
          firstMenu = menu
        }
      }
    }
  }
  recursionMap(userMenus)
  return routes
}

export const pathMapToMenu = (userMenus: any[], currentPath: string, breadcrumbs?: any[]): any => {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export const pathMapToBreadcrumb = (userMenus: any[], currentPath: string): any => {
  const breadcrumbs: any[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// export const pathMapToBreadcrumb = (userMenus: any[], currentPath: string): any => {
//   const breadcrumbs: any[] = []
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         breadcrumbs.push({ name: menu.name })
//         breadcrumbs.push({ name: findMenu.name })
//         return breadcrumbs
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
// }

export const menuMapToPermissions = (userMenus: any[]) => {
  const permissions: string[] = []
  const recursionPermission = (userMenus: any[]) => {
    for (const menu of userMenus) {
      if (menu.type !== 3) {
        recursionPermission(menu.children ?? [])
      } else {
        permissions.push(menu.permission)
      }
    }
  }
  recursionPermission(userMenus)
  return permissions
}

export const menuMapToCheckedLeaf = (menuList: any[]) => {
  const checkedLeaf: number[] = []
  const recursionTree = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        recursionTree(menu.children ?? [])
      } else {
        checkedLeaf.push(menu.id)
      }
    }
  }
  recursionTree(menuList)
  return checkedLeaf
}
export { firstMenu }
