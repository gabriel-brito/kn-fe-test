import { useState } from 'react'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'

import Backdrop from 'components/Backdrop'
import * as S from './styles'

type ProductModalTypes = {
  productData: any
  closeModal: (state: boolean) => void
  showModal: boolean
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
          <S.ProductTitle>{productData.productName}</S.ProductTitle>

          <S.TagsWrapper>
            {productData.tags.length > 0 &&
              productData.tags.map((tag: any) => (
                <S.Tag key={`tag-${tag}`} data-testid={tag}>
                  {tag}
                </S.Tag>
              ))}
          </S.TagsWrapper>

          <S.ManufacturerLink
            href={productData.manufacturerUrl}
            target="_blank"
          >
            Go to Manufacturer
          </S.ManufacturerLink>

          <S.ProductDescription>
            {String(productData.description.join('\n'))}
          </S.ProductDescription>

          {productData.option1 && productData.option2 && (
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

                <S.OptionDescription>{productData.option1}</S.OptionDescription>
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

                <S.OptionDescription>{productData.option2}</S.OptionDescription>
              </S.OptionLabel>
            </>
          )}
        </S.Content>
      </S.Modal>
    </Backdrop>
  ) : null
}
