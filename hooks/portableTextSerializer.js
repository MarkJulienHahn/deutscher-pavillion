export const serializers = {
    marks: {
      link: ({ children, value }) => {
        const rel = value.blank ? "noreferrer noopener" : undefined;
        return (
          <a href={value.href} target="_blank" rel={rel}>
            {children}
          </a>
        );
      },
    },
  };