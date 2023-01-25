/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy } from 'react';

import { CONSTANT_ROUTE } from './constants';

const Cart = lazy(() => import('@pages/cart'));
const Product = lazy(() => import('@pages/product'));

// ------- authentication page --------------
const Login = lazy(() => import('@pages/authentication/login'));
const Register = lazy(() => import('@pages/authentication/register'));
const ForgotPassword = lazy(() => import('@pages/authentication/forgotPassword'));
const ResetPassword = lazy(() => import('@pages/authentication/resetPassword'));

export interface TemplateRouteProps {
  paths: string[];
  hiddenLayout?: boolean;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  private: boolean;
  isLogin?: boolean; // check page login != page other || login != carts
}
// eg: ['about-us', 've-chung-toi']
const TEMPLATE_PAGE: TemplateRouteProps[] = [
  {
    paths: [CONSTANT_ROUTE.EN.CART, CONSTANT_ROUTE.VI.CART],
    component: Cart,
    private: true,
  },
  {
    paths: [CONSTANT_ROUTE.EN.PRODUCT, CONSTANT_ROUTE.VI.PRODUCT],
    component: Product,
    private: false,
  },
  // authentication
  {
    paths: [CONSTANT_ROUTE.EN.LOGIN, CONSTANT_ROUTE.VI.LOGIN],
    component: Login,
    private: false,
    isLogin: true,
    hiddenLayout: true,
  },
  {
    paths: [CONSTANT_ROUTE.EN.REGISTER, CONSTANT_ROUTE.VI.REGISTER],
    component: Register,
    private: false,
  },
  {
    paths: [CONSTANT_ROUTE.EN.FORGOT_PASSWORD, CONSTANT_ROUTE.VI.FORGOT_PASSWORD],
    component: ForgotPassword,
    private: false,
  },
  {
    paths: [CONSTANT_ROUTE.EN.RESET_PASSWORD, CONSTANT_ROUTE.VI.RESET_PASSWORD],
    component: ResetPassword,
    private: false,
  },
];
export default TEMPLATE_PAGE;
