import React from 'react';
import { CardBooks, CardBooksTitle, CardBooksBody } from 'styles';
import { ButtonAddBook, ButtonBook, ButtonFindBook } from 'components';

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
  return (
    <CardBooks color={color}>
      <CardBooksTitle color={color} size="medium">
        {title}
      </CardBooksTitle>
      <CardBooksBody>
        {books.map((item, index: number) => (
          <ButtonBook key={`livro_${index}`} uri={item.url} />
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
