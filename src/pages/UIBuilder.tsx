import React from 'react';

import ApiView from '../components/ApiView';

const List = ({ name }: any) => {
  return <div>This is React List Compoennt {name} </div>;
};

interface IRegistry {
  [key: string]: React.ReactNode;
}

const Registry: IRegistry = {
  List,
  ApiView,
};

interface NodeOptions {
  tag?: string;
  component?: string;
  attrs: any;
  children?: Array<NodeOptions>;
  text?: string;
}

interface UIBuilderProps {
  nodes: Array<NodeOptions>;
  templates: any;
  apis: any;
}

function createElement(
  node: NodeOptions,
  templates: any,
  apis: any
): React.ReactNode | React.ReactNode[] | null {
  if (!node.tag && node.component) {
    if (node.component === 'ApiView') {
      return React.createElement(Registry.ApiView, {
        template: templates[node.attrs.template],
        api: apis[node.attrs.api],
      });
    } else {
      return React.createElement(Registry[node.component], node.attrs, node.text);
    }
  }

  if (node.tag && node.text) {
    return React.createElement(node.tag, node.attrs, node.text);
  }
  if (node.tag && node.children) {
    return React.createElement(
      node.tag,
      node.attrs,
      createElements(node.children, templates, apis)
    );
  }
  return null;
}

function createElements(nodes: Array<NodeOptions>, templates: any, apis: any) {
  return nodes.map((n) => createElement(n, templates, apis));
}

export default function UIBuilder({ nodes, templates, apis }: UIBuilderProps) {
  console.log('nodes :>> ', nodes);

  const all = createElements(nodes, templates, apis);

  console.log('all :>> ', all);

  return <>{all}</>;
}

// html-2-json parser
// https://github.com/andrejewski/himalaya
