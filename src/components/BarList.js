const fakeData = [
  { label: 'فصل بهار', value: 3000000, percent: 60 },
  { label: 'فصل تابستان', value: 2500000, percent: 50 },
  { label: 'فصل پاییز', value: 4000000, percent: 80 },
  { label: 'فصل زمستان', value: 1500000, percent: 30 },
];

const BarList = () => {
  return (
    <div>
      {fakeData.map((item, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          {/* نوار progress */}
          <div
            style={{
              backgroundColor: '#e0e0e0', // رنگ خاکستری
              borderRadius: '10px',
              overflow: 'hidden',
              height: '20px',
              width: '100%', // این باعث میشه همشون عرض یکسان داشته باشن
            }}
          >
            <div
              style={{
                backgroundColor: 'green', // رنگ سبز
                width: `${item.percent}%`, // درصد پر شدن
                height: '100%',
                transition: 'width 0.5s ease',
              }}
            ></div>
          </div>

          {/* متن زیر نوار */}
          <div className="sales-mounth-left-content_chart-text" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
            <span>{item.label}</span>
            <span>{item.value.toLocaleString()} ریال</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarList;
