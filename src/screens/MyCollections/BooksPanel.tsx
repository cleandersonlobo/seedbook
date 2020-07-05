import React, { useEffect } from 'react';
import { CardBooks, CardBooksTitle, CardBooksBody } from 'styles';
import { ButtonAddBook, ButtonFindBook } from 'components';
import { PHBook } from './PHBooksPanel';

let ButtonBook = React.lazy(() => import('components/ButtonBook/ButtonBook'));
interface Props {
  color?: string;
  buttonType?: string;
  title: string;
  books?: any;
}

const BooksPanel: React.FC<Props> = ({
  color = 'purple',
  title,
  books,
  buttonType = 'add',
}) => {
  useEffect(() => {
    return () => {
      ButtonBook = React.lazy(() => import('components/ButtonBook/ButtonBook'));
    };
  }, []);
  return (
    <CardBooks color={color}>
      <CardBooksTitle color={color} size="medium">
        {title}
      </CardBooksTitle>
      <CardBooksBody>
        {books.map((item, index: number) => (
          <React.Suspense fallback={<PHBook />} key={`livro_${index}`}>
            <ButtonBook uri={item.url} />
          </React.Suspense>
        ))}
        {
          {
            add: <ButtonAddBook color={color} />,
            find: <ButtonFindBook color={color} />,
          }[buttonType]
        }
      </CardBooksBody>
    </CardBooks>
  );
};

export default BooksPanel;
