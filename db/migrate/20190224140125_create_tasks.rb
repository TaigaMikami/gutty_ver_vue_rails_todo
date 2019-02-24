class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false, comment: 'タイトル'
      t.text :content, comment: '内容'
      t.integer :status, null: false, comment: '状態'

      t.timestamps
    end
  end
end
