import React, { useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { useAllCollections } from '../hooks/useCollection';

const filterOption = { company: '', city: '', work: '' };

const IndexPage = () => {
  const { collections, companies, cities, works } = useAllCollections();
  const [filterData, setFilterData] = useState(collections);
  const selectPageData = [
    { type: 'company', name: '公司', options: companies },
    { type: 'city', name: '城市', options: cities },
    { type: 'work', name: '岗位', options: works },
  ];

  const handleFilter = (e, type) => {
    const { value } = e.target;
    filterOption[type] = value;
    const match = (key, value) =>
      ['', 'All', value].includes(filterOption[key]);
    const filteredData = collections.filter(
      (data) =>
        match('company', data.company) &&
        match('work', data.work) &&
        match('city', data.city)
    );
    setFilterData(filteredData);
  };

  return (
    <Layout>
      <Seo title="互联网实习秋招参考手册" />
      <div className="flex flex-col items-start md:items-center md:flex-row">
        <div className="md:mr-4 h-28 w-28 text-7xl flex md:justify-center items-center justify-start">
          📜
        </div>
        <h1 className="text-2xl font-extrabold text-black md:text-5xl dark:text-white">
          互联网实习秋招参考手册
        </h1>
      </div>
      <div className="mt-6 flex gap-4 items-center">
        <a href="https://github.com/HUSTLab/hustlab.github.io">
          <img
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/hustlab/hustlab.github.io?style=social"
          />
        </a>
        <a href="https://github.com/HUSTLab/hustlab.github.io">
          <img
            src="https://visitor-badge.glitch.me/badge?page_id=hustlab.github.io"
            alt="visitor badge"
          />
        </a>
      </div>
      <div className="mt-6 text-gray-900 dark:text-white">
        <p className="mt-2">
          <a
            href="https://github.com/HUSTLab/hustlab.github.io"
            className="text-yellow-700 transition hover:text-yellow-600 underline dark:text-blue-400  dark:hover:text-blue-300"
          >
            互联网实习秋招参考手册
          </a>{' '}
          最初由华科 19
          级软硕同学发起，通过分发问卷，调研了已实习同学的实习经历。主要收集房租、上下班时间、加班情况、公司福利、团队氛围、所做业务、是否受政策影响等等几个方面的信息，帮助其他同学应对接下来的秋招，也给即将实习的同学做一份参考。你也可以{' '}
          <a
            href="https://github.com/HUSTLab/hustlab.github.io#%E5%8F%82%E4%B8%8E%E8%B4%A1%E7%8C%AE"
            className="text-yellow-700 transition hover:text-yellow-600 underline dark:text-blue-400  dark:hover:text-blue-300"
          >
            提交内容
          </a>{' '}
          参与贡献。
        </p>
        <p className="border-l-4 border-gray-200 py-2 my-3 px-3 text-gray-500">
          2021-10-13 整合{' '}
          <a
            className="text-yellow-700 transition hover:text-yellow-600 dark:text-blue-400  dark:hover:text-blue-300"
            href="https://github.com/WorkerLivesMatter/WorkingTime"
          >
            WorkerLivesMatter
          </a>{' '}
          数据
        </p>
      </div>
      <div className="flex w-full mt-4 flex-col items-center gap-4 sm:flex-row">
        {selectPageData.map((item, index) => (
          <select
            key={index}
            onChange={(e) => {
              handleFilter(e, item.type);
            }}
            defaultValue="placeholder"
            required
            className="select select-bordered w-full flex-1 text-base"
          >
            <option value="placeholder" disabled="disabled">
              {item.name}
            </option>
            <option value="All">全部</option>
            {item.options.map((option, key) => (
              <option key={key} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>
      {filterData.map((item, index) => (
        <div key={item.id} className="card shadow mt-6 w-full">
          <div className="card-body">
            <h2 className="card-title">
              {item.company}-{item.department}-{item.work}
            </h2>
            <div className="mb-3">
              <span className="badge mr-2">{item.company}</span>
              <span className="badge mr-2">{item.work}</span>
              <span className="badge mr-2">{item.city}</span>
              {item.industry !== '' && (
                <span className="badge mr-2">{item.industry}</span>
              )}
            </div>
            <p className="mb-3">
              上下班时间：{item.startWork}（上班），{item.endWork}（下班）
            </p>
            <p className="mb-3">
              用餐时间：{item.lunchTime}（午餐），{item.dinnerTime}（晚餐）
            </p>
            <p className="mb-3">
              是否特殊工作日：{item.Wed}（周三），{item.Fri}（周五）
            </p>
            <p className="mb-3">
              一周工作天数：{item.workDays}，日报/周报：{item.report}
            </p>
            <p className="mb-3">备注：{item.note || '无'}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage;
