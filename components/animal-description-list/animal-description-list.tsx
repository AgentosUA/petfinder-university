import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { InputProps } from 'react-select';
import styles from './animal-description-list.module.scss';
import { AnimalGender, AnimalStatus, AnimalType } from '@models';
import { FaPaw as PawIcon } from 'react-icons/fa';
import { BsGenderAmbiguous as GenderIcon } from 'react-icons/bs';
import { GrStatusInfo as StatusIcon } from 'react-icons/gr';
import { MdLocationOn as LocationIcon } from 'react-icons/md';
import { BsCalendarDate as CalendarIcon } from 'react-icons/bs';
import { AnimalDescriptionListProps } from './animal-description-list.props';

const AnimalDescriptionList = ({
  type,
  status,
  gender,
  city,
  month,
  day,
  year
}: AnimalDescriptionListProps) => (
  <ul className={styles.details}>
    <li>
      <PawIcon /> {AnimalType[type]}
    </li>
    <li>
      <StatusIcon /> {AnimalStatus[status]}
    </li>
    <li>
      <GenderIcon /> {AnimalGender[gender]}
    </li>
    <li>
      <LocationIcon /> {city}
    </li>
    <li>
      <CalendarIcon /> {String(day).length > 1 ? day : `0${day}`}.
      {String(month).length > 1 ? month : `0${month}`}.{year}
    </li>
  </ul>
);

export { AnimalDescriptionList };
