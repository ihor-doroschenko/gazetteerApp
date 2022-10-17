import { Breadcrumb } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePartOfIsOpened } from 'redux/details-reducer';
import CustomBreadcrumbClasses from './CustomBreadCrumb.module.css';

const CustomBreadcrumb = ({ id, image }) => {
  const dispatch = useDispatch();
  const state = image && image.isOpened;
  return (
    <Breadcrumb>
      <Breadcrumb.Item
        className={
          !state ? CustomBreadcrumbClasses.clickedCrumb : CustomBreadcrumbClasses.unClickedCrumb
        }
        onClick={() => dispatch(changePartOfIsOpened(id, false))}>
        Text view
      </Breadcrumb.Item>
      <Breadcrumb.Item
        className={
          !state ? CustomBreadcrumbClasses.unClickedCrumb : CustomBreadcrumbClasses.clickedCrumb
        }
        onClick={() => dispatch(changePartOfIsOpened(id, true))}>
        Image view
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
