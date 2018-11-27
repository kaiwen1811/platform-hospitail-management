export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // 医生管理
      {
        path: '/doctor',
        name: 'doctor',
        icon: 'usergroup-delete',
        routes: [
          {
            path: '/doctor/doctor-list',
            name: 'doctorList',
            component: './Doctor/DoctorList',
          },
        ],
      },
      // 科室管理
      {
        path: '/department',
        name: 'department',
        icon: 'book',
        routes: [
          {
            path: '/department/department-list',
            name: 'departmentList',
            component: './Department/DepartmentList',
          },
        ],
      },
      // 医院管理
      {
        path: '/hospital',
        name: 'hospital',
        icon: 'tags',
        routes: [
          {
            path: '/hospital/hospital-list',
            name: 'hospitalList',
            component: './Hospital/HospitalList',
          },
          {
            path: '/hospital/hospital-detail',
            name: 'hospitalDetail',
            component: './Hospital/HospitalDetail',
            hideInMenu: true,
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
