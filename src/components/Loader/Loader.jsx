import { Vortex } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrap>
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </Wrap>
  );
};
