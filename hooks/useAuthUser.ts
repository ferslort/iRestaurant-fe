import { useEffect, useMemo, useState } from 'react';
import { getDataLocal, setDataLocal } from '../utils/local';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/slices/auth';

export interface InitialState {
  user: undefined | null | object;
  auth: undefined | boolean;
  loading: boolean;
  token: undefined | string;
}

const initialState: InitialState = {
  user: undefined,
  auth: undefined,
  loading: true,
  token: undefined
};

export const useAuthUser = () => {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  useEffect(() => {
    setState({
      ...state,
      loading: true
    });

    getUser().then((res) => {
      if (res) {
        const user = jwtDecode(res) as object;
        dispatch(setAuthUser(user));
        setState({
          ...state,
          user,
          auth: true,
          loading: false,
          token: res
        });
      } else {
        setState({
          ...state,
          user: null,
          auth: false,
          loading: false
        });
      }
    });
  }, []);

  const getUser = async () => {
    return getDataLocal('auth_token_user_irestaurant') || null;
  };

  const setTokenUser = async (token: string) => {
    setDataLocal('auth_token_user_irestaurant', token);
  };

  const memoData = useMemo(() => {
    return {
      ...state,
      setTokenUser
    };
  }, [state]);

  return memoData;
};
