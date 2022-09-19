package config

import (
    "github.com/TheerasakRa/AFS/models"

    "gorm.io/driver/mysql"
    "gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
    var err error
    dsn := "root:meta01@tcp(127.0.0.1:3000)/ai_farm_stay?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        panic(err)
    }

    db.AutoMigrate(&models.Dataplants{})
    DB = db

}