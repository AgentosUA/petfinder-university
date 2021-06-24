import { Button, Modal } from '@components';
import { Fragment, useEffect, useState } from 'react';

import styles from './posts.module.scss';
import { profileService } from '@api';
import { Edit } from './edit';


const Posts = ({ posts = [] }) => {
  const [postsLocal, setPostsLocal] = useState([...posts]);
  const [selectedPost, setSelectedPost] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);


  const onDeletePost = async () => {
    try {
      const [_, statusCode] = await profileService.deletePost(selectedPost.id);

      if (statusCode !== 200) {
        setShowErrorModal(true);
        return;
      }

      setPostsLocal(posts.filter((post => post._id !== selectedPost?.id)));
    } catch (error) {
      setShowErrorModal(true);
    } finally {
      setShowDeleteModal(false);
    }
  }

  const onEditPost = async ({ name, type, status, image, gender, description, date, city }) => {
    try {

      const formData = new FormData();
      formData.append('name', name);
      formData.append('type', type.value);
      formData.append('status', status.value);
      formData.append('gender', gender.value);
      formData.append('description', description);
      formData.append('city', city);
      formData.append('date', date);
      formData.append('image', image);
      
      await profileService.updatePost(selectedPost.id, formData);
      
    } catch (error) {

    }
    finally {
      setShowEditModal(false);
    }
  };

  return (
    <Fragment>
      <div className={styles.posts}>
        {Boolean(!postsLocal.length) && <Fragment>
          <div className={styles.empty}>
            <h3>У вас немає жодного оголошення</h3>
            <Button link='/create'>Створити оголошення</Button>
          </div>
        </Fragment>}
        {postsLocal.map(({ name, type, city, gender, image, status, description, date, _id: id }) => {
          const generatedDate = new Date(date);
          const day = generatedDate.getDate();
          const month = generatedDate.getMonth() + 1;
          const year = generatedDate.getFullYear();

          return (
            <div className={styles.post} key={id}>
              <img className={styles.image} src={image} alt='animal' />
              <h3 className={styles.name}>{name}</h3>
              {/* <ul className={styles.details}>
                <li><b>Тип:</b> {AnimalType[type]}</li>
                <li><b>Статус:</b> {AnimalStatus[status]}</li>
                <li><b>Стать:</b> {AnimalGender[gender]}</li>
                <li><b>Місто:</b> {city}</li>
                <li><b>Дата:</b> {String(day).length > 1 ? day : `0${day}`}.{String(month).length > 1 ? month : `0${month}`}.{year}</li>
              </ul> */}
              <Button
                onClick={() => {
                  setSelectedPost({ id, name, type, city, gender, description, image, status, date });
                  setShowEditModal(true);
                }}
              >
                Редагувати
              </Button>
              <Button
                onClick={() => {
                  setSelectedPost({ id, name, type, city, gender, description, image, status, date });
                  setShowDeleteModal(true);
                }}
              >
                Видалити
              </Button>

            </div>
          )
        })}

        {showEditModal &&
          (<Modal
            title='Редагувати оголошення'
            type='empty'
            onConfirm={onEditPost}
            onClose={() => setShowEditModal(false)}
          >
            <Edit post={selectedPost} onClose={() => setShowEditModal(false)} onSubmit={onEditPost} />
          </Modal>)
        }

        {showDeleteModal &&
          (<Modal
            title='Ви точно хочете видалити це оголошення?'
            type='confirm'
            onConfirm={onDeletePost}
            onClose={() => setShowDeleteModal(false)}
          >
            <div className={styles.modalPost}>
              <img className={styles.image} src={selectedPost?.image} alt='animal' />
              <h3 className={styles.name}>{selectedPost?.name}</h3>
            </div>
          </Modal>)
        }

        {showErrorModal &&
          (<Modal
            title='Сталась невідома помилка, спробуйте ще раз'
            type='alert'
            onClose={() => setShowErrorModal(false)}
          />)
        }

      </div>
    </Fragment >
  )
}

export { Posts };