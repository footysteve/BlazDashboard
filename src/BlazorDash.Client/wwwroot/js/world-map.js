/* ECHRTS */


function initWorldMap() {

    if (typeof (echarts) === 'undefined') { return; }
    console.log('initWorldMap');


    var theme = {
        color: [
            '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
            '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
        ],

        title: {
            itemGap: 8,
            textStyle: {
                fontWeight: 'normal',
                color: '#408829'
            }
        },

        dataRange: {
            color: ['#1f610a', '#97b58d']
        },

        toolbox: {
            color: ['#408829', '#408829', '#408829', '#408829']
        },        

        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#408829',
                    type: 'dashed'
                },
                crossStyle: {
                    color: '#408829'
                },
                shadowStyle: {
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        dataZoom: {
            dataBackgroundColor: '#eee',
            fillerColor: 'rgba(64,136,41,0.2)',
            handleColor: '#408829',
            show: true,
            realtime: true,
            start: 1,
            end: 100
        },        

        grid: {
            borderWidth: 0
        },

        categoryAxis: {
            axisLine: {
                lineStyle: {
                    color: '#408829'
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },

        valueAxis: {
            axisLine: {
                lineStyle: {
                    color: '#408829'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },
        timeline: {
            lineStyle: {
                color: '#408829'
            },
            controlStyle: {
                normal: { color: '#408829' },
                emphasis: { color: '#408829' }
            }
        },

        k: {
            itemStyle: {
                normal: {
                    color: '#68a54a',
                    color0: '#a9cba2',
                    lineStyle: {
                        width: 1,
                        color: '#408829',
                        color0: '#86b379'
                    }
                }
            }
        },
        map: {
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#c12e34'
                        }
                    }
                },
                emphasis: {
                    areaStyle: {
                        color: '#99d2dd'
                    },
                    label: {
                        textStyle: {
                            color: '#c12e34'
                        }
                    }
                }
            }
        },
        force: {
            itemStyle: {
                normal: {
                    linkStyle: {
                        strokeColor: '#408829'
                    }
                }
            }
        },
        chord: {
            padding: 4,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 1,
                        color: 'rgba(128, 128, 128, 0.5)'
                    },
                    chordStyle: {
                        lineStyle: {
                            width: 1,
                            color: 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis: {
                    lineStyle: {
                        width: 1,
                        color: 'rgba(128, 128, 128, 0.5)'
                    },
                    chordStyle: {
                        lineStyle: {
                            width: 1,
                            color: 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },
        gauge: {
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
                    width: 8
                }
            },
            axisTick: {
                splitNumber: 10,
                length: 12,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                length: 18,
                lineStyle: {
                    color: 'auto'
                }
            },
            pointer: {
                length: '90%',
                color: 'auto'
            },
            title: {
                textStyle: {
                    color: '#333'
                }
            },
            detail: {
                textStyle: {
                    color: 'auto'
                }
            }
        },
        textStyle: {
            fontFamily: 'Arial, Verdana, sans-serif'
        }
    };

    //echart Map

    if ($('#echart_world_map').length) {

        var echartMap = echarts.init(document.getElementById('echart_world_map'), theme);


        echartMap.setOption({
            title: {
                text: 'World Football Competitions (2018)',
                subtext: 'not all competitions have been added yet',
                x: 'center',
                y: 'top'
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    var value = params.value;// (params.value + '').split('.');
                    value = value;//.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');// + '.' + value[1];
                    return params.seriesName + '<br/>' + params.name + ' : ' + value;
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        title: "Text View",
                        lang: [
                            "Text View",
                            "Close",
                            "Refresh",
                        ],
                        readOnly: false
                    },
                    restore: {
                        show: true,
                        title: "Restore"
                    },
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            dataRange: {
                min: 0,
                max: 30,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                color: ['#087E65', '#26B99A', '#CBEAE3']
            },
            series: [{
                name: 'Competitions by Country (2018)',
                type: 'map',
                mapType: 'world',
                roam: true,
                mapLocation: {
                    y: 60
                },
                itemStyle: {
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: [{
                    name: 'Afghanistan',
                    value: 2
                }, {
                    name: 'Angola',
                    value: 1
                }, {
                    name: 'Albania',
                    value: 2
                }, {
                    name: 'United Arab Emirates',
                    value: 2
                }, {
                    name: 'Argentina',
                    value: 11
                }, {
                    name: 'Armenia',
                    value: 2
                }, {
                    name: 'French Southern and Antarctic Lands',
                    value: 0
                }, {
                    name: 'Australia',
                    value: 5
                }, {
                    name: 'Austria',
                    value: 4
                }, {
                    name: 'Azerbaijan',
                    value: 2
                }, {
                    name: 'Burundi',
                    value: 4
                }, {
                    name: 'Belgium',
                    value: 4
                }, {
                    name: 'Benin',
                    value: 3
                }, {
                    name: 'Burkina Faso',
                    value: 1
                }, {
                    name: 'Bangladesh',
                    value: 1
                }, {
                    name: 'Bulgaria',
                    value: 3
                }, {
                    name: 'The Bahamas',
                    value: 1
                }, {
                    name: 'Bosnia and Herzegovina',
                    value: 2
                }, {
                    name: 'Belarus',
                    value: 3
                }, {
                    name: 'Belize',
                    value: 1
                }, {
                    name: 'Bermuda',
                    value: 1
                }, {
                    name: 'Bolivia',
                    value: 1
                }, {
                    name: 'Brazil',
                    value: 12
                }, {
                    name: 'Brunei',
                    value: 1
                }, {
                    name: 'Bhutan',
                    value: 1
                }, {
                    name: 'Botswana',
                    value: 1
                }, {
                    name: 'Central African Republic',
                    value: 2
                }, {
                    name: 'Canada',
                    value: 1
                }, {
                    name: 'Switzerland',
                    value: 3
                }, {
                    name: 'Chile',
                    value: 6
                }, {
                    name: 'China',
                    value: 3
                }, {
                    name: 'Ivory Coast',
                    value: 1
                }, {
                    name: 'Cameroon',
                    value: 1
                }, {
                    name: 'Democratic Republic of the Congo',
                    value: 1
                }, {
                    name: 'Republic of the Congo',
                    value: 1
                }, {
                    name: 'Colombia',
                    value: 1
                }, {
                    name: 'Costa Rica',
                    value: 1
                }, {
                    name: 'Cuba',
                    value: 1
                }, {
                    name: 'Northern Cyprus',
                    value: 0
                }, {
                    name: 'Cyprus',
                    value: 2
                }, {
                    name: 'Czech Republic',
                    value: 2
                }, {
                    name: 'Germany',
                    value: 18
                }, {
                    name: 'Djibouti',
                    value: 2
                }, {
                    name: 'Denmark',
                    value: 3
                }, {
                    name: 'Dominican Republic',
                    value: 1
                }, {
                    name: 'Algeria',
                    value: 1
                }, {
                    name: 'Ecuador',
                    value: 2
                }, {
                    name: 'Egypt',
                    value: 2
                }, {
                    name: 'Eritrea',
                    value: 1
                }, {
                    name: 'Spain',
                    value: 6
                }, {
                    name: 'Estonia',
                    value: 1
                }, {
                    name: 'Ethiopia',
                    value: 1
                }, {
                    name: 'Finland',
                    value: 3
                }, {
                    name: 'Fiji',
                    value: 1
                }, {
                    name: 'Falkland Islands',
                    value: 0
                }, {
                    name: 'France',
                    value: 6
                }, {
                    name: 'Gabon',
                    value: 1
                }, {
                    name: 'United Kingdom',
                    value: 26
                }, {
                    name: 'Georgia',
                    value: 2
                }, {
                    name: 'Ghana',
                    value: 1
                }, {
                    name: 'Guinea',
                    value: 0
                }, {
                    name: 'Gambia',
                    value: 1
                }, {
                    name: 'Guinea Bissau',
                    value: 0
                }, {
                    name: 'Equatorial Guinea',
                    value: 0
                }, {
                    name: 'Greece',
                    value: 2
                }, {
                    name: 'Greenland',
                    value: 0
                }, {
                    name: 'Guatemala',
                    value: 1
                }, {
                    name: 'French Guiana',
                    value: 1
                }, {
                    name: 'Guyana',
                    value: 1
                }, {
                    name: 'Honduras',
                    value: 1
                }, {
                    name: 'Croatia',
                    value: 2
                }, {
                    name: 'Haiti',
                    value: 0
                }, {
                    name: 'Hungary',
                    value: 2
                }, {
                    name: 'Indonesia',
                    value: 1
                }, {
                    name: 'India',
                    value: 1
                }, {
                    name: 'Ireland',
                    value: 4
                }, {
                    name: 'Iran',
                    value: 0
                }, {
                    name: 'Iraq',
                    value: 0
                }, {
                    name: 'Iceland',
                    value: 1
                }, {
                    name: 'Israel',
                    value: 2
                }, {
                    name: 'Italy',
                    value: 5
                }, {
                    name: 'Jamaica',
                    value: 1
                }, {
                    name: 'Jordan',
                    value: 1
                }, {
                    name: 'Japan',
                    value: 3
                }, {
                    name: 'Kazakhstan',
                    value: 1
                }, {
                    name: 'Kenya',
                    value: 1
                }, {
                    name: 'Kyrgyzstan',
                    value: 1
                }, {
                    name: 'Cambodia',
                    value: 1
                }, {
                    name: 'South Korea',
                    value: 2
                }, {
                    name: 'Kosovo',
                    value: 0
                }, {
                    name: 'Kuwait',
                    value: 1
                }, {
                    name: 'Laos',
                    value: 0
                }, {
                    name: 'Lebanon',
                    value: 0
                }, {
                    name: 'Liberia',
                    value: 0
                }, {
                    name: 'Libya',
                    value: 1
                }, {
                    name: 'Sri Lanka',
                    value: 1
                }, {
                    name: 'Lesotho',
                    value: 0
                }, {
                    name: 'Lithuania',
                    value: 1
                }, {
                    name: 'Luxembourg',
                    value: 1
                }, {
                    name: 'Latvia',
                    value: 2
                }, {
                    name: 'Morocco',
                    value: 1
                }, {
                    name: 'Moldova',
                    value: 1
                }, {
                    name: 'Madagascar',
                    value: 0
                }, {
                    name: 'Mexico',
                    value: 8
                }, {
                    name: 'Macedonia',
                    value: 1
                }, {
                    name: 'Mali',
                    value: 0
                }, {
                    name: 'Myanmar',
                    value: 0
                }, {
                    name: 'Montenegro',
                    value: 1
                }, {
                    name: 'Mongolia',
                    value: 0
                }, {
                    name: 'Mozambique',
                    value: 0
                }, {
                    name: 'Mauritania',
                    value: 0
                }, {
                    name: 'Malawi',
                    value: 0
                }, {
                    name: 'Malaysia',
                    value: 2
                }, {
                    name: 'Namibia',
                    value: 1
                }, {
                    name: 'New Caledonia',
                    value: 0
                }, {
                    name: 'Niger',
                    value: 1
                }, {
                    name: 'Nigeria',
                    value: 1
                }, {
                    name: 'Nicaragua',
                    value: 1
                }, {
                    name: 'Netherlands',
                    value: 8
                }, {
                    name: 'Norway',
                    value: 6
                }, {
                    name: 'Nepal',
                    value: 0
                }, {
                    name: 'New Zealand',
                    value: 1
                }, {
                    name: 'Oman',
                    value: 0
                }, {
                    name: 'Pakistan',
                    value: 1
                }, {
                    name: 'Panama',
                    value: 1
                }, {
                    name: 'Peru',
                    value: 1
                }, {
                    name: 'Philippines',
                    value: 1
                }, {
                    name: 'Papua New Guinea',
                    value: 0
                }, {
                    name: 'Poland',
                    value: 3
                }, {
                    name: 'Puerto Rico',
                    value: 1
                }, {
                    name: 'North Korea',
                    value: 0
                }, {
                    name: 'Portugal',
                    value: 6
                }, {
                    name: 'Paraguay',
                    value: 2
                }, {
                    name: 'Qatar',
                    value: 0
                }, {
                    name: 'Romania',
                    value: 2
                }, {
                    name: 'Russia',
                    value: 5
                }, {
                    name: 'Rwanda',
                    value: 1
                }, {
                    name: 'Western Sahara',
                    value: 0
                }, {
                    name: 'Saudi Arabia',
                    value: 1
                }, {
                    name: 'Sudan',
                    value: 1
                }, {
                    name: 'South Sudan',
                    value: 0
                }, {
                    name: 'Senegal',
                    value: 1
                }, {
                    name: 'Solomon Islands',
                    value: 0
                }, {
                    name: 'Sierra Leone',
                    value: 0
                }, {
                    name: 'El Salvador',
                    value: 1
                }, {
                    name: 'Somaliland',
                    value: 0
                }, {
                    name: 'Somalia',
                    value: 1
                }, {
                    name: 'Republic of Serbia',
                    value: 2
                }, {
                    name: 'Suriname',
                    value: 0
                }, {
                    name: 'Slovakia',
                    value: 2
                }, {
                    name: 'Slovenia',
                    value: 3
                }, {
                    name: 'Sweden',
                    value: 6
                }, {
                    name: 'Swaziland',
                    value: 0
                }, {
                    name: 'Syria',
                    value: 0
                }, {
                    name: 'Chad',
                    value: 1
                }, {
                    name: 'Togo',
                    value: 0
                }, {
                    name: 'Thailand',
                    value: 0
                }, {
                    name: 'Tajikistan',
                    value: 0
                }, {
                    name: 'Turkmenistan',
                    value: 0
                }, {
                    name: 'East Timor',
                    value: 0
                }, {
                    name: 'Trinidad and Tobago',
                    value: 0
                }, {
                    name: 'Tunisia',
                    value: 1
                }, {
                    name: 'Turkey',
                    value: 3
                }, {
                    name: 'United Republic of Tanzania',
                    value: 0
                }, {
                    name: 'Uganda',
                    value: 1
                }, {
                    name: 'Ukraine',
                    value: 3
                }, {
                    name: 'Uruguay',
                    value: 3
                }, {
                    name: 'United States of America',
                    value: 5
                }, {
                    name: 'Uzbekistan',
                    value: 0
                }, {
                    name: 'Venezuela',
                    value: 1
                }, {
                    name: 'Vietnam',
                    value: 0
                }, {
                    name: 'Vanuatu',
                    value: 0
                }, {
                    name: 'West Bank',
                    value: 0
                }, {
                    name: 'Yemen',
                    value: 0
                }, {
                    name: 'South Africa',
                    value: 2
                }, {
                    name: 'Zambia',
                    value: 1
                }, {
                    name: 'Zimbabwe',
                    value: 0
                }]
            }]
        });

        //echartMap.on('click', function (params) {
        //    if (params.data) {
        //        echartMap.setOption({
        //            world: {
        //                center: params.data.value,
        //                zoom: 6
        //            }
        //        });
        //    } else {
        //        echartMap.setOption({
        //            world: {
        //                center: [0, 0],
        //                zoom: 1
        //            }
        //        });
        //    }
        //    //echartMap.setOption(option);
        //});

    }

}  