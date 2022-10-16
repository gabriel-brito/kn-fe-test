import { useState } from 'react'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'

import Backdrop from 'components/Backdrop'
import * as S from './styles'

type ProductModalTypes = {
  productData: any
  closeModal: (state: boolean) => void
  showModal: boolean
}

const mock = {
  productName: 'Foxit software PhantomPDF Standard',
  tags: ['PDF', 'Change', 'Create', 'Maintenance', 'Business', 'FoxIT'],
  category: 'Daily Business',
  manufacturerUrl: 'https://www.foxitsoftware.com/de/pdf-editor',
  description: [
    'PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.',
    'Standard - Simple interface and limited functionality.'
  ],
  option1: '1 Year Maintenance',
  option2: 'Without Maintenance'
}

export default function ProductModal({
  productData,
  showModal,
  closeModal
}: ProductModalTypes) {
  const [selectedOpt, setSelectedOpt] = useState('opt1')
  const handleCloseModal = () => closeModal(false)

  return showModal ? (
    <Backdrop>
      <S.Modal data-testid="product-modal">
        <S.Header>
          <S.HeaderWrapper>
            <S.Title>Product Details</S.Title>

            <S.CloseButton aria-label="close" onClick={handleCloseModal}>
              <CloseIcon />
            </S.CloseButton>
          </S.HeaderWrapper>
        </S.Header>

        <S.Content>
          <S.ProductTitle>{mock.productName}</S.ProductTitle>

          <S.TagsWrapper>
            {mock.tags.length > 0 &&
              mock.tags.map((tag) => (
                <S.Tag key={`tag-${tag}`} data-testid={tag}>
                  {tag}
                </S.Tag>
              ))}
          </S.TagsWrapper>

          <S.ManufacturerLink href={mock.manufacturerUrl} target="_blank">
            Go to Manufacturer
          </S.ManufacturerLink>

          <S.ProductDescription>{mock.description}</S.ProductDescription>

          {mock.option1 && mock.option2 && (
            <>
              <S.OptionLabel>
                <S.RadioWrapper
                  style={{
                    color:
                      selectedOpt === 'opt1'
                        ? 'var(--black)'
                        : 'var(--darkGrey)'
                  }}
                >
                  <S.Radio
                    checked={selectedOpt === 'opt1'}
                    onChange={() => setSelectedOpt('opt1')}
                    type="radio"
                    value="opt1"
                  />
                  Option 1
                </S.RadioWrapper>

                <S.OptionDescription>{mock.option1}</S.OptionDescription>
              </S.OptionLabel>

              <S.OptionLabel>
                <S.RadioWrapper
                  style={{
                    color:
                      selectedOpt === 'opt2'
                        ? 'var(--black)'
                        : 'var(--darkGrey)'
                  }}
                >
                  <S.Radio
                    checked={selectedOpt === 'opt2'}
                    onChange={() => setSelectedOpt('opt2')}
                    type="radio"
                    value="opt2"
                  />
                  Option 2
                </S.RadioWrapper>

                <S.OptionDescription>{mock.option2}</S.OptionDescription>
              </S.OptionLabel>
            </>
          )}
        </S.Content>
      </S.Modal>
    </Backdrop>
  ) : null
}
