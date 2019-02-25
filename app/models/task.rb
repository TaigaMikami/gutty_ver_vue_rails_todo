class Task < ApplicationRecord
  enum status: { ready: 0, doing: 1, done: 2 }
end
