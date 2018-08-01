import * as React from "react";

import { news } from "../../static/reference";
import { Colors } from "../../styles";
import { Link } from "react-router-dom";

const Articles = () => {
    return (
        <div
            style={{
                width: "300px",
                backgroundColor: Colors.GREEN,
                height: "100%",
            }}
        >
            <div
                style={{
                    width: "300px",
                    height: "430px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                }}
            >
                {news.map(article => {
                    return (
                        <Link to={article.to}>
                            <div
                                className="article-nav-item"
                                style={{
                                    color: Colors.WHITE,
                                }}
                            >
                                <span style={{ fontWeight: 400 }}>
                                    {article.displayName}
                                </span>
                                <div
                                    style={{
                                        fontSize: "10px",
                                        marginTop: "6px",
                                    }}
                                >
                                    {article.description}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Articles;
