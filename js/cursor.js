    const cursors = [
      '/cursor/cursor1.cur',
      '/cursor/cursor2.cur',
      '/cursor/cursor3.cur',
      '/cursor/cursor4.cur'
    ];

    let index = 0;
    let intervalId = null;

    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', () => {
        // start rotating
        intervalId = setInterval(() => {
          link.style.cursor = `url("${cursors[index]}"), pointer`;
          index = (index + 1) % cursors.length;
        }, 69);
      });

      link.addEventListener('mouseleave', () => {
        // reset to default and stop rotating
        clearInterval(intervalId);
        intervalId = null;
        link.style.cursor = `url("${cursors[0]}"), pointer`;
        index = 0;
      });
    });
