import React, { useState, useRef, useEffect  } from 'react';
import AlarmClockIcon from './alarmClock.svg';
import { PickerItem } from './pickerItem';

const dayData = ["AM", "PM"];

export const AlarmClock = ({ label, defaultValue }) => {
    const [hour, setHour] = useState(defaultValue.split(":")[0]);
    const [minute, setMinute] = useState(defaultValue.split(":")[1]);
    const [day, setDay] = useState("AM");
    const [pickerModal, setPickerModal] = useState(false);
    
    const wrapperRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, []);
    
      const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setPickerModal(false);
        }
      };

    return (
        <div ref={wrapperRef} className="flex flex-col items-start">
            <p className="text-gray-500">{label}</p>
            <div className="flex flex-row items-center justify-between w-56 h-6 border-b border-gray-900">
                <div className="flex flex-row items-center">
                    <p className="text-xl cursor-default">{hour}&nbsp;:&nbsp;{minute}&nbsp;{day}</p>
                </div>
                <img src={AlarmClockIcon} className="w-4 h-4" onClick={() => setPickerModal(true)} />
            </div>

            {pickerModal &&
                <div className="flex flex-row justify-between w-48 h-64 shadow-2xl absolute mt-12 p-2">
                    <div className="w-1/3 m-1 flex flex-col h-full overflow-y-scroll items-center">
                        {Array.from(Array(12), (e, i) => {
                            return (
                                <PickerItem
                                    key={i}
                                    item={('0' + (i + 1)).slice(-2)}
                                    selected={hour === ('0' + (i + 1)).slice(-2) ? true : false}
                                    selectItem={setHour}
                                />
                            )
                        })}
                    </div>
                    <div className="w-1/3 m-1 flex flex-col h-full overflow-y-scroll items-center">
                        {Array.from(Array(61), (k, l) => {
                            return (
                                <PickerItem
                                    key={l}
                                    item={('0' + l).slice(-2)}
                                    selected={minute === ('0' + l).slice(-2) ? true : false}
                                    selectItem={setMinute}
                                />
                            )
                        })}
                    </div>
                    <div className="w-1/3 m-1 flex flex-col h-full overflow-y-scroll items-center">
                        {dayData.map((item, i) =>
                            <PickerItem
                                key={i}
                                item={item}
                                selected={day === item ? true : false}
                                selectItem={setDay}
                            />
                        )}
                    </div>
                </div>
            }
        </div>
    )
}
