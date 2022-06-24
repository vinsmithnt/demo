import { CommonActions, DrawerActions, DrawerActionType } from '@react-navigation/native';

let navigator: { dispatch: (arg0: CommonActions.Action | DrawerActionType) => void; getCurrentRoute: () => any; } | null;

const setTopLevelNavigator = (navigatorRef: { dispatch: (arg0: CommonActions.Action | DrawerActionType) => void; getCurrentRoute: () => any; } | null) => {
  navigator = navigatorRef;
};

const navigate = (routeName: string, params?: object ) => {
  navigator?.dispatch(
    CommonActions.navigate(routeName, {
      ...params,
    }),
  );
};

const reset = (routeName: any, params?: object) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: routeName, params: params }],
  });

  navigator?.dispatch(resetAction);
};

const openDrawer = () => {
  navigator?.dispatch(DrawerActions.openDrawer());
};

const closeDrawer = () => {
  navigator?.dispatch(DrawerActions.closeDrawer());
};

const getActiveRoute = () => {
  return navigator?.getCurrentRoute();
};

export default {
  setTopLevelNavigator,
  navigate,
  reset,
  openDrawer,
  closeDrawer,
  getActiveRoute,
};
