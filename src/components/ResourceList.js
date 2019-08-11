import React from 'react';

import useResources from './useResources';

const ResourceList = ({ resourceName }) => {
  const resources = useResources(resourceName);

  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList;
