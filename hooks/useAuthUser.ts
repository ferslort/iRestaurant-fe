import { useEffect, useMemo, useState } from 'react';
import { getDataLocal, setDataLocal } from '../utils/local';
import jwtDecode from 'jwt-decode';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../gql/user';
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
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState(undefined);

  const { data, loading } = useQuery(GET_USER);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.findByOneUser && !loading) {
      setUser(data.findByOneUser);
      dispatch(setAuthUser(data.findByOneUser));
    }
    setReload(false);
  }, [loading, data, reload]);

  useEffect(() => {
    setState({
      ...state,
      loading: true
    });

    getUser().then((res) => {
      if (res) {
        const user = jwtDecode(res) as object;
        setState({
          ...state,
          user,
          auth: true,
          loading: false,
          token: res
        });
        setReload(!reload);
      } else {
        setState({
          ...state,
          user: null,
          auth: false,
          loading: false
        });
        setReload(!reload);
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
      setTokenUser,
      setReload,
      user
    };
  }, [state, reload, user]);

  return memoData;
};
