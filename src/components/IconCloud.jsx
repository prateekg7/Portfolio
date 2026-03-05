import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';
import { useEffect, useState } from 'react';

const ICON_SLUGS = [
  'javascript',
  'typescript',
  'react',
  'nextdotjs',
  'nodedotjs',
  'python',
  'amazonwebservices',
  'github',
  'docker',
  'html5',
  'css3',
  'dart',
  'flutter',
  'git',
  'kotlin',
  'postgresql',
  'mongodb',
  'firebase',
  'vercel',
  'figma',
  'cplusplus',
  'openai',
  'tensorflow',
  'pytorch',
  'redis',
  'graphql',
  'tailwindcss',
  'linux',
  'nginx',
  'kubernetes',
  'supabase',
  'rust',
  'go',
  'swift',
  'angular',
  'vuedotjs',
  'express',
  'django',
];

const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.03,
    minSpeed: 0.01,
  },
};

function renderCustomIcon(icon) {
  const bgHex = '#080510';
  const fallbackHex = '#ffffff';
  const minContrastRatio = 2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
}

function IconCloud() {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: ICON_SLUGS }).then((data) => {
      setIcons(
        Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon))
      );
    });
  }, []);

  return (
    <div className="icon-cloud">
      {icons ? (
        <Cloud {...cloudProps}>{icons}</Cloud>
      ) : (
        <div className="icon-cloud__loading" />
      )}
    </div>
  );
}

export default IconCloud;
